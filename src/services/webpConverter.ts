import { encode } from "@jsquash/webp";


export default async function convertToWebP(
    file: File,
    quality = 75
): Promise<Blob> {

    const imageBitmap = await createImageBitmap(file);


    const canvas = document.createElement("canvas");

    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;


    const ctx = canvas.getContext("2d");

    if (!ctx) {
        throw new Error("Canvas not supported");
    }


    ctx.drawImage(
        imageBitmap,
        0,
        0
    );


    const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    );


    const webpBuffer = await encode(
        imageData,
        {
            quality
        }
    );


    return new Blob(
        [webpBuffer],
        {
            type: "image/webp"
        }
    );
}