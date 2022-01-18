export const sheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXGfKXwmtXV3JXkkvFW9kcvXtWdEpXq-5uohygcek-qM19CvuWTZYf5VwrgXqwMBVLhVomP0yp_jEZ/pubhtml";


export const fetchData = async () => {
  return fetch(sheetUrl)
    .then((response) => response.text())
    .then(function (html) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      let rows = [...doc.getElementsByTagName("tbody")[0].children];
      let data = rows.slice(0, 27).map((el) => {
        let cells = [...el.cells].slice(1, 10);
        return cells.map((cell) => cell.textContent);
      });

      const lastUpdate = data[0][1];
      const comps = data.slice(4).map((arr) => {
        return {
          rank: arr[0],
          carries: arr[1],
          synergies: arr[2],
          lolchess: arr[3],
          carousel: arr[4],
          items: arr[5],
          difficulty: arr[6],
          rolling: arr[7],
          early: arr[8]
        };
      });

      return {
        lastUpdate: lastUpdate,
        comps: comps
      };
    })
    .catch((error) => {
      throw error;
    });
};
