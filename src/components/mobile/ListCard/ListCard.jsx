import {useState} from "react";


export default function ListCard({ title, conductor, date }){
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300); // Reset the click state after 300ms
        props.onClick(); // Call the onClick prop to handle the bottom sheet opening
    };
    // console.log(props);
    var titlestr1 = title.toString()
    const truncateTitle = (titlestr) => {
        if (titlestr.length > 23) {
            return titlestr.substring(0, 23) + '...';
        }
        return title;
    };
    var titlestr = truncateTitle(titlestr1)
    return (
        <div className={`flex justify-between items-center p-4 dark:bg-[#282828] rounded-2xl shadow-md ${isClicked ? 'animate-click' : ''}`}
            onClick={handleClick}
            >
            <div className="flex items-center">
                {/*<div className={`h-3 w-3 rounded-full mr-3`} style={{ backgroundColor: color }}></div>*/}
                <div>
                    <h1 className="text-white text-lg sarala-bold">{titlestr}</h1>
                    <h3 className="text-gray-400 sarala-regular">by {conductor}</h3>
                </div>
            </div>
            <div className="text-gray-400 sarala-regular">
                {date}
            </div>
        </div>
    );
};