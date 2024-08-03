


export default function ListCard({ color, title, conductor, date }){
    // console.log(props);
    return (
        <div className="flex justify-between items-center p-4 dark:bg-[#282828] rounded-2xl shadow-md">
            <div className="flex items-center">
                <div className={`h-3 w-3 rounded-full mr-3`} style={{ backgroundColor: color }}></div>
                <div>
                    <h1 className="text-white text-lg sarala-bold">{title}</h1>
                    <h3 className="text-gray-400 sarala-regular">by {conductor}</h3>
                </div>
            </div>
            <div className="text-gray-400 sarala-regular">
                {date}
            </div>
        </div>
    );
};