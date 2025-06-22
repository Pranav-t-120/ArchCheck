import LoadBalancerIcon from "./LoadBalancer";
import WebServer from "./WebServer";
import ApplicationServer from "./ApplicationServer";
import DataBase from "./DataBase";
import Kafka from "./Kafka";
import CDN from "./CDN"; // Assuming you have a CDN component
import ApiGateway from "./APIGateway";
import Authentication from "./Authentication";
import Logging from "./Logging";
import Client from "./Client";
import Microservcies from "./microservices";
import ObjectStorage from "./ObjectStorage";
import ServiceDiscovery from "./ServiceDiscovery";
import CICD from "./cicd";
import Firewall from "./Firewall";
import Cache from "./Cache";


const svgMap = {
    "Load Balancer": <LoadBalancerIcon />,
    "Web Server": <WebServer />,
    "Application Server": <ApplicationServer />,
    "Database": <DataBase />,
    "Cache": <Cache />,
    "Message Queue": <Kafka />,
    "CDN": <CDN />,
    "API Gateway": <ApiGateway />,
    "Authentication Service": <Authentication />,
    "Monitoring & Logging": <Logging />,
    "Client": <Client />,
    "Microservices": <Microservcies />,
    "Object Storage": <ObjectStorage />,
    "Service Discovery": <ServiceDiscovery />,
    "CI/CD Pipeline": <CICD />,
    "Security (Firewall/ WAF)": <Firewall />,
    // Add more SVG components here
}

const SvgProvider = ({type}) =>{
    return svgMap[type] ? svgMap[type] : null;
};

export default SvgProvider;