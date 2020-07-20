import React, {Component} from "react";
import Navigator from "../../common/Navigator";
import AdvancedCounter from "../../components/fp/AdvancedCounter";
class HomePage extends Component<any, any>{
    public render() {
        return <div>
            <Navigator/>
            <AdvancedCounter/>
        </div>
    }

}
export default HomePage