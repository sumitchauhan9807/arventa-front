import { useState } from "react";
import '@/app/cookie.css'
const CookiePolicy = () => {
  const [showBanner, setShowBanner] = useState(() => {
    return !localStorage.getItem("cookie-consent");
  });

  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const allowAll = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: true,
      })
    );

    setShowBanner(false);
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const savePreferences = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify(preferences)
    );

    setShowPreferences(false);
    setShowBanner(false);
  };

  if (!showBanner && !showPreferences) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div
          style={{ background: "black" }}
          className="fixed bottom-0 inset-x-0 z-60 w-full p-6 animate-slide-up"
        >
          <div className="p-4 bg-layer rounded-xl shadow-2xs">
            <div className="flex gap-x-5">
              {/* Cookie SVG */}
              <svg
                className="hidden sm:block shrink-0 w-20"
                width={72}
                height={63}
                viewBox="0 0 72 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5174 56.1528C16.2903 57.6825 16.929 61.4559 14.8118 60.9459C13.5013 60.5381 11.4445 57.6213 12.493 56.1528C12.661 55.8468 13.2189 55.2757 14.106 55.4389"
                  stroke="currentColor"
                  className="stroke-foreground"
                  strokeWidth={2}
                  strokeLinecap="round"
                />

                <path
                  d="M15.5173 49.6263L14.0262 48.5579C13.5346 48.2056 12.8477 48.3707 12.658 48.945C12.3456 49.8907 12.1258 51.1463 12.462 52.2324C12.5336 52.4636 12.7127 52.6466 12.9449 52.7146C13.8342 52.9751 15.2568 52.9048 15.8197 51.054"
                  stroke="currentColor"
                  className="stroke-foreground"
                  strokeWidth={2}
                  strokeLinecap="round"
                />

                <ellipse
                  cx="51.2061"
                  cy="22.3973"
                  rx="3.02446"
                  ry="3.05945"
                  fill="currentColor"
                  className="text-foreground"
                />

                <path
                  d="M67.7398 29.6361C68.8249 31.2826 67.6381 32.6215 66.8281 33.1457C66.7645 33.1869 66.695 33.2184 66.6214 33.2363C65.0504 33.618 63.6063 31.5388 63.6063 30.0441C63.6064 28.8034 66.3283 27.4945 67.7398 29.6361Z"
                  fill="currentColor"
                  className="text-foreground"
                />

                <path
                  d="M58.868 38.6126C57.9809 36.4914 54.6002 37.7288 53.0207 38.6126C51.7101 39.2288 52.0126 41.4681 53.6256 43.3038C54.9161 44.7723 56.5157 44.1196 57.1542 43.6097C58.0951 42.8279 59.7552 40.7339 58.868 38.6126Z"
                  fill="currentColor"
                  className="text-foreground"
                />

                <path
                  d="M45.4596 49.2172C40.9431 47.667 40.2844 51.6987 40.5196 53.9083C40.8221 55.3361 42.4351 55.54 43.4433 55.2341C45.5677 54.5894 51.1052 51.1548 45.4596 49.2172Z"
                  fill="currentColor"
                  className="text-foreground"
                />

                <ellipse
                  rx="2.96295"
                  ry="3.45694"
                  transform="matrix(0.855131 0.518411 -0.509711 0.860345 30.4996 41.3871)"
                  fill="currentColor"
                  className="text-foreground"
                />

                <path
                  d="M38.5032 29.1282C39.471 27.8228 37.8983 26.0687 36.991 25.3549C36.0836 24.6411 34.8335 24.8654 33.8657 26.1707C32.7567 27.6664 37.2934 30.7599 38.5032 29.1282Z"
                  fill="currentColor"
                  className="text-foreground"
                />

                <path
                  d="M19.2476 18.9295C16.4247 18.2768 15.7862 19.8813 15.8198 20.7652C16.0215 23.8246 20.5582 24.4365 21.6672 23.6207C22.4364 23.0548 22.776 19.7453 19.2476 18.9295Z"
                  fill="currentColor"
                  className="text-foreground"
                />

                <path
                  d="M36.6888 6.79381C35.6403 4.67259 33.2947 5.02613 32.2529 5.46805C28.7042 6.61025 29.3292 8.52749 30.1358 9.13938C31.3456 10.1252 34.2289 12.0153 36.0839 11.6889C38.4027 11.281 37.9994 9.44533 36.6888 6.79381Z"
                  fill="currentColor"
                  className="text-foreground"
                />

                <path
                  d="M56.9526 54.9284C57.7592 53.5006 60.2795 51.0735 65.1187 49.9313C66.0596 49.7953 67.9818 48.5647 68.1431 44.7302C68.3448 39.9371 73.5872 32.9003 69.3529 28.1072C67.5382 26.053 68.4456 23.2121 67.5382 17.7051"
                  stroke="currentColor"
                  className="stroke-foreground"
                  strokeWidth={2}
                  strokeLinecap="round"
                />

                <path
                  d="M66.7316 16.176C65.1521 14.2383 60.6625 9.8939 55.3394 8.01743C48.703 5.67797 55.8063 4.55591 44.1399 4.75246C44.0816 4.75344 44.0194 4.76029 43.9617 4.76836C43.0194 4.90008 40.5102 4.51266 37.2614 1.95295C37.2161 1.91728 37.1681 1.88406 37.1153 1.86091C36.6 1.63502 35.1744 1.43154 32.9584 2.2045C30.6192 3.02036 24.0531 5.46791 21.0622 6.58971C20.4237 6.92965 19.0056 8.05825 18.441 9.85312C17.7353 12.0967 5.93991 23.5187 9.56927 28.9237"
                  stroke="currentColor"
                  className="stroke-foreground"
                  strokeWidth={2}
                  strokeLinecap="round"
                />

                <path
                  d="M10.4768 30.1484C11.9084 30.3333 14.621 31.3895 15.0562 34.1372C15.1369 34.6464 15.5068 35.0847 16.0079 35.2063C18.8253 35.8904 22.6446 38.4014 20.8122 44.4603C20.7218 44.7592 20.7652 45.0847 20.9158 45.3583C21.7327 46.8422 22.367 49.4462 20.6725 51.7386C20.1262 52.4776 20.4167 53.842 21.2912 54.1243C23.3727 54.7962 25.8398 55.985 27.2662 57.833C27.5533 58.2049 28.0338 58.3932 28.4956 58.3062C30.4142 57.9446 33.9492 57.9776 37.2937 60.233C42.1328 63.4964 42.3345 60.0291 48.6858 60.7429C53.7669 61.314 55.7765 58.3294 56.1462 56.7656"
                  stroke="currentColor"
                  className="stroke-foreground"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>

              {/* Content */}
              <div className="grow">
                <h2 className="text-lg font-semibold text-foreground">
                  We are using cookies to improve your experience!
                </h2>

                <p className="mt-2 text-sm text-muted-foreground-2">
                  By clicking "Allow all", you agree to use of all cookies.
                  Visit our{" "}
                  <a
                    className="inline-flex items-center gap-x-1.5 text-primary decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                    href="#"
                  >
                    Cookies Policy
                  </a>{" "}
                  to learn more.
                </p>

                <div className="mt-5 inline-flex gap-x-2">
                  <button
                    type="button"
                    onClick={allowAll}
                    className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Allow all
                  </button>

                  <button
                    type="button"
                    onClick={openPreferences}
                    className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus"
                  >
                    Manage cookies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4">
          <div style={{background:"black"}} className="w-full max-w-lg rounded-xl bg-layer border border-layer-line shadow-xl p-6 animate-slide-up">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Cookie preferences
                </h2>

                <p className="mt-1 text-sm text-muted-foreground-2">
                  Choose which cookies you would like to allow.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="cursor-pointer text-muted-foreground-2 hover:text-foreground text-xl"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* Necessary */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-medium text-foreground">
                    Necessary cookies
                  </h3>

                  <p className="text-sm text-muted-foreground-2">
                    Required for the website to work properly.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked
                  disabled
                  className="size-4"
                />
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-medium text-foreground">
                    Analytics cookies
                  </h3>

                  <p className="text-sm text-muted-foreground-2">
                    Help us understand how visitors use the website.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      analytics: e.target.checked,
                    })
                  }
                  className="size-4"
                />
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-medium text-foreground">
                    Marketing cookies
                  </h3>

                  <p className="text-sm text-muted-foreground-2">
                    Used to provide relevant advertising and marketing.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      marketing: e.target.checked,
                    })
                  }
                  className="size-4"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="cursor-pointer py-2 px-4 text-sm font-medium rounded-lg bg-layer border border-layer-line text-layer-foreground hover:bg-layer-hover"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={savePreferences}
                className="cursor-pointer py-2 px-4 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover"
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiePolicy;

