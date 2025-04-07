import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb.js';
(async () => {
  let resultado = await OMDBSearchByPage("cars", 1);
  console.log("OMDBSearchByPage", resultado);

  resultado = await OMDBSearchComplete("cars");
  console.log("OMDBSearchComplete", resultado);

  resultado = await OMDBGetByImdbID("tt0317219");
  console.log("OMDBGetByImdbID", resultado);
})();