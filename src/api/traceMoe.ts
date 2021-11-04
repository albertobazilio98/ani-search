const baseUrl = 'https://api.trace.moe/';

async function get(url: string, data: object) {
  const formData = new FormData();
  Object.entries(data).forEach(entry => formData.append(...entry));

  const result = await fetch(url, {
    method: "POST",
    body: formData,
  });
  return result.json() as Promise<traceMoeResponse>;
}

async function search(body: { image: File }) {
  const result = await get(`${baseUrl}search?cutBorders`, body);
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

export { search };
export type { traceMoeResponse }