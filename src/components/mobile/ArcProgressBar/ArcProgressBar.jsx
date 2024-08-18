import React from "react";
import ArcProgress from "react-arc-progress";

export default class ArcProgressBar extends React.Component {
    state = {
        progress: 1.0,
        customText: [
            { text: "08", size: "24px", color: "#33BBEA", x: 100, y: 94 },
            { text: "Attended", size: "14px", color: "#33BBEA", x: 100, y: 122 }
        ]
    };

    render() {
        const { progress } = this.props;
        const { customText } = this.props;
        const arcFillColor = { gradient: ["#0065b3", "#3bcaf3"] };
        return (
            <>
                {/*<div*/}
                {/*    style={{*/}
                {/*        height: 200,*/}
                {/*        width: 200,*/}
                {/*        borderRadius: 50,*/}
                {/*        position: "absolute",*/}
                {/*        left: 58,*/}
                {/*        marginTop: 50,*/}
                {/*        boxShadow: `1px 3px 1px rgba(0,0,0,0.1)`,*/}
                {/*        //boxShadow: "-2px 2px  rgba(0,0,0,0.1)",*/}
                {/*        //mozBoxShadow: "0 0 5px  5px rgba(0,0,0,0.3)",*/}
                {/*        WebkitBoxShadow: "0 3px 5px 1px rgba(0,0,0,0.1)"*/}
                {/*        //oBoxShadow: "0 0 2px 2px rgba(0,0,0,0.3)"*/}
                {/*    }}*/}
                {/*></div>*/}
                <ArcProgress
                    thickness={20}
                    fillColor={arcFillColor}
                    progress={progress}
                    customText={customText}
                    style={{ position: "relative" }}
                    observer={(current) => {
                        const { percentage, currentText } = current;
                        // console.log("observer:", percentage, currentText);
                    }}
                    animationEnd={({ progress, text }) => {
                    //     console.log("animationEnd", progress, text);
                    }}
                    // TODO: change colour of empty based on scheme
                    emptyColor={"#09232d"}
                />
            </>
        );
    }
}
