import { createClientsHeader } from "./createHeader.js";
import { createClientSection } from "./createClientsSection.js";

const createApp = () => {
    const header = createClientsHeader();
    const ClientSection = createClientSection();
    document.body.append(header, ClientSection.main);
}

createApp();