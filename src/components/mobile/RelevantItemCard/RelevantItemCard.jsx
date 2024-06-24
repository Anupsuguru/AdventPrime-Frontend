

export default function RelevantItemCard({content}){

    return (
        <>
            <div className="grid grid-cols-12 dark:bg-[#282828] m-2 min-h-3/4 rounded-xl">
                <div className="clr col-span-1">

                </div>
                <div className="col-span-9">
                    <h2 className="text-lg text-white">{content.name}</h2>
                    <h3 className="text-sm text-white">{content.by}</h3>
                </div>
                <div className="col-span-2">
                    <p className="text-white">{content.date}</p>
                </div>
            </div>
        </>
    )
}