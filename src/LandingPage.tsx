import { useState } from "react";
import Navbar from "./Navbar";
import UploadBox from "./UploadBox";
import FeatureCards from "./FeatureCards";
import "./styles/buttons.css";
import "./LandingPage.css";
import convertToWebP from "./services/webpConverter";
import JSZip from "jszip";
import { trackEvent } from "./analytics";
import WebPInfo from "./WebPInfo";
import Footer from "./Footer";


export default function LandingPage() {

    const [files, setFiles] = useState<File[]>([]);
    const [convertedFiles, setConvertedFiles] = useState<File[]>([]);

    const [isConverting, setIsConverting] = useState(false);

    const [originalSize, setOriginalSize] = useState(0);
    const [convertedSize, setConvertedSize] = useState(0);


    const handleFilesSelected = (selectedFiles: File[]) => {

        setFiles(selectedFiles);
        setConvertedFiles([]);

        const size = selectedFiles.reduce(
            (total, file) => total + file.size,
            0
        );

        setOriginalSize(size);

        trackEvent(
            "images_selected",
            "converter",
            `${selectedFiles.length} files`
        );
    };


    const formatSize = (bytes: number) => {

        if (bytes < 1024)
            return `${bytes} B`;

        if (bytes < 1024 * 1024)
            return `${(bytes / 1024).toFixed(1)} KB`;

        return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    };


    const handleConvert = async () => {

        setIsConverting(true);

        trackEvent(
            "conversion_started",
            "converter"
        );

        const results: File[] = [];

        let totalConvertedSize = 0;


        for (const file of files) {

            const blob = await convertToWebP(file);


            totalConvertedSize += blob.size;


            const webpFile = new File(
                [blob],
                file.name.replace(/\.[^/.]+$/, ".webp"),
                {
                    type: "image/webp"
                }
            );


            results.push(webpFile);

        }


        setConvertedFiles(results);

        setConvertedSize(totalConvertedSize);

        setIsConverting(false);

    };


    const downloadZip = async () => {

        const zip = new JSZip();

        trackEvent(
            "zip_downloaded",
            "converter"
        );


        convertedFiles.forEach(file => {

            zip.file(file.name, file);

        });


        const blob = await zip.generateAsync({
            type: "blob"
        });


        const url = URL.createObjectURL(blob);


        const link = document.createElement("a");

        link.href = url;

        link.download = "webp-images.zip";

        link.click();


        URL.revokeObjectURL(url);

    };


    const savedPercentage = originalSize
        ? Math.round(
            ((originalSize - convertedSize)
                / originalSize) * 100
        )
        : 0;



    return (

        <div className="landing-page">

            <Navbar />


            <section className="hero">


                <h1>
                    The Fastest Way to Convert JPG and PNG Images to WebP
                </h1>


                <p>
                    Reduce image size while keeping quality.
                    Fast, free and completely private.
                </p>



                <UploadBox
                    onFilesSelected={handleFilesSelected}
                />



                {
                    files.length > 0 &&
                    convertedFiles.length === 0 && (

                        <div className="action-card">


                            <h2>
                                ✓ {files.length} image
                                {files.length > 1 ? "s" : ""}
                                {" "}ready
                            </h2>


                            <div className="size-info">

                                <span>
                                    Original size
                                </span>

                                <strong>
                                    {formatSize(originalSize)}
                                </strong>

                            </div>



                            <button
                                className="btn btn-large"
                                onClick={handleConvert}
                                disabled={isConverting}
                            >

                                {
                                    isConverting
                                        ? "⚙️ Converting..."
                                        : "⚡ Convert to WebP"
                                }

                            </button>


                        </div>

                    )}




                {
                    convertedFiles.length > 0 && (

                        <div className="success-card">


                            <div className="success-icon">
                                🎉
                            </div>


                            <h2>
                                Conversion Complete
                            </h2>


                            <p>
                                You saved
                                {" "}
                                <strong>
                                    {savedPercentage}%
                                </strong>
                                {" "}
                                of your image size
                            </p>



                            <div className="comparison-small">

                                <div>
                                    Before
                                    <strong>
                                        {formatSize(originalSize)}
                                    </strong>
                                </div>


                                <div>
                                    After
                                    <strong>
                                        {formatSize(convertedSize)}
                                    </strong>
                                </div>

                            </div>



                            <button
                                className="btn btn-large"
                                onClick={downloadZip}
                            >
                                ⬇ Download ZIP
                            </button>


                        </div>

                    )}



                <div className="trust">
                    🔒 No uploads • ⚡ Instant processing • 💻 Works offline
                </div>


            </section>


            <FeatureCards />
            <WebPInfo />
        </div>

    );

}