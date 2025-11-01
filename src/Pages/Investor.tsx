import { investorSideNav } from "../Constants/Data";
import SecondaryLayout from "../Layouts/SecondaryLayout";

export default function Investor(){
    return(
        <SecondaryLayout data={investorSideNav}/>
    )
}