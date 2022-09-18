export const searchResult = (search: string): Promise<{ [x: string]: string }[]> =>
  new Promise((resolve, reject) => {
    fetch(`https://api.github.com/search/users?q=${search} in:login`)
      .then((res) => res.json())
      .then((res) => {
        if (res?.items?.length > 0) {
          resolve(res.items);
          return;
        }

        reject();
      })
      .catch((e) => reject());
  });
