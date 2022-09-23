const URL_API = "https://api.adviceslip.com/advice";

export const getAdvice = async () => {
	const response = await fetch(URL_API);
	const data = await response.json();
	return data.slip;
};