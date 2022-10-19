const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YGalzGQEsNr86NPpSVf9';

const showComments = async (id) => {
  const response = await fetch(`${api}/comments?item_id=${id}`);
  const allComments = await response.json();
  return allComments;
};

export default showComments;