import { getGifs } from "../../src/helpers/getGift";

describe("Pruebas en getGift()", () => {
  test("debe de retornar un arreglo de gift ", async () => {
    const gifs = await getGifs("One Puch");
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
