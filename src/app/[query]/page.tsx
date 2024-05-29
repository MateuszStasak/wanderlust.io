import { DestinationItem, SearchKeys } from '../types';
import Image from 'next/image';
import OpenAI from 'openai';

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export default async function RequestPage(props: {
  params: { query: string };
}) {
  const pathNameParams = new URLSearchParams(
      decodeURIComponent(props.params.query)
  );
  const { location, month, budget, activity } = Object.fromEntries(
      pathNameParams
  ) as Record<SearchKeys, string>;

  if (!location || !month) return <p>No data</p>;

  let textPrompt = `Make a list of top 5 places to travel from ${location} in ${month}`;
  if (activity) textPrompt += ` to do ${activity}`;
  if (budget) textPrompt += ` with budget of ${budget}$ per month`;
  textPrompt += " and explain why. In format Location - Description";

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0125',
      messages: [{ role: "user", content: textPrompt }],
      temperature: 0,
      max_tokens: 2000,
    });


    const content = response?.choices?.[0].message?.content;
    if (!content) {
      return <p>No data</p>;
    }

    const entries = content.split('\n').filter(entry => entry.trim() !== '');

    const destinations: DestinationItem[] = [];

    for (const entry of entries) {
      const [locationWithNumber, description] = entry.split(' - ');
      const [, location] = locationWithNumber.split('.');

      const imageResponse = await openai.images.generate({
        model: 'dall-e-2',
        prompt: 'Best place in' + location.trim(),
        n: 1,
        size: '512x512',
      });

      if (imageResponse.data && Array.isArray(imageResponse.data) && imageResponse.data.length > 0) {
        destinations.push({ location, description, img: imageResponse.data[0].url ?? 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=512&height=512'});
      }
    }

    return (
        <div className='flex flex-col gap-4 mt-2 mb-2'>
          {destinations.map(({ location, description, img }) => (
              <div key={location} className='card lg:card-side bg-base-100 shadow-xl'>
                <figure className='relative w-full min-w-[230px] max-w-[230px]'>
                  <Image src={img} alt={location} fill />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{location}</h2>
                  <p>{description}</p>
                </div>
              </div>
          ))}
        </div>
    );
  } catch (error) {
    return <p>There was an error processing your request. Please try again later.</p>;
  }
}