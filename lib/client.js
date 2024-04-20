import {createClient} from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


export const client = createClient({
    projectId:"u1dxmq2s",
    dataset:"production",
    apiVersion:"2024-04-20",
    useCdn:true,
    token:"sk70evAwnSaHwZ0dE9RpsgbWoAlpeO2JVusj4hHmRlsgC9oJs3XYZRv0iNxbVIuP4Mop9GEOWScqcH4TBNqrQLlZm3Nrtc5WhxY9JscFV7tAcow4NfxHzUw2AUWzsrtt5r3hVEO1NBSQGY1Geeshf8iskbRV7ekqFIaA4rVBTjCQr1qIRpSX",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);