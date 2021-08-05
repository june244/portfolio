import { useEffect, useState } from "react";

const useScroll = () => {
	const [state, setState] = useState({
		x: 0, // x와 y의 초기값을 0으로 지정
		y: 0,
		per: '0'
	});
	const onScroll = () => {
		const per : string = ((window.scrollY / (document.documentElement.offsetHeight - window.innerHeight))*100).toFixed(0);
		setState({ x: window.scrollX, y: window.scrollY, per: per });

	};
	useEffect(() => {
		window.addEventListener("scroll", onScroll); // scorll할 때 onScroll 이벤트 핸들러 지정
		return () => window.removeEventListener("scroll", onScroll); // clean up
	}, []);
	return state;
};

export default useScroll;