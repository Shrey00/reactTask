import logo from './logo512.png'
import Card from './Components/Card'
const DeriveCard = () => {
    return (
        <div className="flex z-0 flex-col m-auto " >
            <Card
                title={"Heading"}
                subtitle={"subHeading"}
                location={"Location"}
                startDate={"6 July"}
                duration={"6 months"}
                applyBy={"10 July"}
                stipend={10000}
                chipText={["internship", "paid"]}
                logo={logo}
                buttonUrl={"#"} />


            <Card
                title={"Heading2"}
                subtitle={"subHeading2"}
                location={"Location2"}
                startDate={"6 July"}
                duration={"6 months"}
                applyBy={"10 July"}
                stipend={10000}
                chipText={["internship", "paid", "web dev", "tech"]}
                logo={logo}
                buttonUrl={"#"} />

            <Card
                title={"Heading3"}
                location={"Location3"}
                startDate={"6 July"}
                duration={"6 months"}
                applyBy={"10 July"}
                chipText={["internship", "paid", "web dev", "tech"]}
                logo={logo}
                buttonUrl={"#"} />

            <Card
                title={"Heading4"}
                startDate={"8 June"}
                duration={"6 months"}
                applyBy={"15 June"}
                stipend={10000}
                logo={logo}
                buttonUrl={"#"} />
        </div>
    );
}
export default DeriveCard;