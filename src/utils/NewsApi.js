// need to get todays date and week prior into proper data string format first - to 
// put later into fetch request
const currentDate = new Date(); // new date object to hold current date and time
const currentDateString = currentDate.toLocaleDateString('sv-SE'); // get to proper format
const weekPriorDateString = new Date(
    currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  ).toLocaleDateString('sv-SE'); // get week prior in proper format

const getNewsData = ({ apiKey, keyword }) => {
    return fetch(
        `https://nomoreparties.co/news/v2/everything?q=${keyword}&from=${weekPriorDateString}&to=${currentDateString}&pageSize=100&apiKey=${apiKey}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    ).then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    });
};
export default getNewsData;