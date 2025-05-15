import LoadBalancerIcon from "./LoadBalancer";
import WebServer from "./WebServer";
import ApplicationServer from "./ApplicationServer";
import DataBase from "./DataBase";
import Redis from "./Redis";
import Kafka from "./Kafka";
import CDN from "./CDN"; // Assuming you have a CDN component
import ApiGateway from "./APIGateway";
import Authentication from "./Authentication";
import Logging from "./Logging";


const svgMap = {
    "Load Balancer": <LoadBalancerIcon />,
    "Web Server": <WebServer />,
    "Application Server": <ApplicationServer />,
    "Database": <DataBase />,
    "Redis": <Redis />,
    "Message Queue": <Kafka />,
    "CDN": <CDN />,
    "API Gateway": <ApiGateway />,
    "Authentication Service": <Authentication />,
    "Monitoring & Logging": <Logging />,
    // Add more SVG components here
}

const SvgProvider = ({type}) =>{
    return svgMap[type] ? svgMap[type] : null;
};

export default SvgProvider;