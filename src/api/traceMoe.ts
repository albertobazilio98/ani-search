const baseUrl = 'https://api.trace.moe/';

async function get({ querystring, formData }: { querystring?: string, formData?: FormData }) {

  const result = await fetch(`${baseUrl}search?${querystring}`, {
    method: "POST",
    body: formData,
  });
  return result.json() as Promise<traceMoeResponse>;
}

async function searchByUpload({ image, params }: { image: File, params?: object }) {
  const formData = new FormData();
  formData.append('image', image);
  const querystring = new URLSearchParams('cutBorders=true');
  params && Object.entries(params).forEach(entry => querystring.append(...entry));

  const result = await get({ querystring: querystring.toString(), formData});
  return result;
}

async function searchByURL(params: { url: string }) {
  const querystring = new URLSearchParams('cutBorders=true');
  Object.entries(params).forEach(entry => querystring.append(...entry));

  const result = await get({ querystring: querystring.toString()});
  return result;
}

type traceMoeResponse = {
  error: string;
  frameCount: number;
  result: {
    filename: string;
    episode: number;
    image: string;
    video: string;
    anilist: number;
    from: number;
    to: number;
    similarity: number;
  }[];
}

export { searchByUpload, searchByURL };
export type { traceMoeResponse }