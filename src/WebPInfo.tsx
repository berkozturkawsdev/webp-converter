import "./WebPInfo.css";
import "./styles/theme.css";

export default function WebPInfo() {
    return (
        <section className="webp-info">

            <h2>What is WebP?</h2>

            <p>
                <strong>WebP</strong> is a modern image format developed by Google
                that creates <strong>smaller image files without sacrificing visual quality</strong>.
                Compared to traditional formats like JPG and PNG, WebP can significantly
                reduce file size, helping websites load faster while using less bandwidth.
            </p>

            <p>
                Whether you run a website, online store, blog, or share images online,
                converting your images to WebP is one of the easiest ways to improve
                website performance.
            </p>

            <h3>Why use WebP?</h3>

            <ul>
                <li>🚀 <strong>Faster websites</strong> – Smaller images load more quickly.</li>
                <li>📈 <strong>Better SEO</strong> – Faster pages improve user experience and search rankings.</li>
                <li>💾 <strong>Reduced storage</strong> – Save space with smaller image files.</li>
                <li>🌐 <strong>Lower bandwidth usage</strong> – Transfer less data to visitors.</li>
                <li>✨ <strong>High image quality</strong> – Maintain excellent quality with better compression.</li>
                <li>🔍 <strong>Browser support</strong> – Supported by all modern browsers.</li>
            </ul>


            <h3>How does WebP compression work?</h3>

            <div className="compression-box">

                <div>
                    <h4>Lossy Compression</h4>
                    <p>
                        Lossy compression reduces file size by removing image details
                        that are less visible to the human eye. It is ideal for photos
                        and website images.
                    </p>
                </div>

                <div>
                    <h4>Lossless Compression</h4>
                    <p>
                        Lossless compression reduces file size without removing image
                        data. It is perfect for logos, screenshots, and graphics.
                    </p>
                </div>

            </div>


            <h3>Why compress images?</h3>

            <ul>
                <li>Improve website loading speed</li>
                <li>Increase Core Web Vitals scores</li>
                <li>Improve mobile browsing experience</li>
                <li>Reduce hosting and CDN costs</li>
                <li>Improve SEO performance</li>
            </ul>


            <div className="webpify-banner">

                <h3>Convert Images to WebP with Webpify</h3>

                <p>
                    Webpify converts JPG, JPEG, PNG, GIF, BMP, TIFF, AVIF, HEIC
                    and other image formats to WebP directly in your browser.
                </p>

                <ul>
                    <li>✅ No image uploads</li>
                    <li>✅ Privacy-friendly</li>
                    <li>✅ Fast conversion</li>
                    <li>✅ Batch image conversion</li>
                    <li>✅ Free to use</li>
                </ul>

                <p>
                    Your images never leave your device, making Webpify a secure
                    and efficient way to optimize images for the web.
                </p>

            </div>

        </section>
    );
}