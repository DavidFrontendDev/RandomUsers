export async function bringData() {
  const data = await fetch("https://randomuser.me/api/?results=10");
  const dataParsed = await data.json();
  return dataParsed;
}
