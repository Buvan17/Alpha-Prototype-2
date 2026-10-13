export default function InfrastructureIllustration() {
  return (
    <div className="isometric-scene" role="img" aria-label="Illustration of a highway bridge connecting a city and a river landscape">
      <span className="isometric-scene-label">CONNECTED BY DESIGN</span>
      <svg viewBox="0 0 520 300" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="scene-river" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#87b3a3" />
            <stop offset="1" stopColor="#4d8a7c" />
          </linearGradient>
          <linearGradient id="scene-road" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#566761" />
            <stop offset="1" stopColor="#344b45" />
          </linearGradient>
        </defs>
        <path d="M24 209 268 79l231 126-240 83Z" fill="#e9e1ce" />
        <path d="m20 223 239 89 241-111v-14L259 298 24 209Z" fill="#c9b99d" />
        <path d="m20 209 240 86 238-108-232-126Z" fill="url(#scene-river)" />
        <path d="m20 209 240 86 238-108" fill="none" stroke="#c7e0cf" strokeWidth="2" opacity=".8" />
        <path d="m44 186 205-109 21 12-207 112Z" fill="#d8c5a6" />
        <path d="m63 177 201-105 17 10L80 188Z" fill="url(#scene-road)" />
        <path d="m80 188 201-106v11L81 200Z" fill="#293e39" />
        <path d="m64 177 17 11v12l-17-10Z" fill="#b88b5b" />
        <path d="m264 72 17 10v11l-17-10Z" fill="#b88b5b" />
        <path d="m90 176 13-7 8 4-13 7Zm34-18 13-7 8 4-13 7Zm34-18 13-7 8 4-13 7Zm34-18 13-7 8 4-13 7Zm34-18 13-7 8 4-13 7Z" fill="#f2d591" />
        <path d="m118 163-2 48-8 5-2-48m84-38-2 48-8 5-2-48m82-38-2 48-8 5-2-48" fill="#88735d" />
        <path d="m115 210 9 3v7l-9-3Zm76-38 9 3v7l-9-3Zm77-39 9 3v7l-9-3Z" fill="#b88b5b" />
        <path d="m321 91 34-18 34 18v43l-34 18-34-18Z" fill="#d4b997" />
        <path d="m321 91 34 18v43l-34-18Z" fill="#b99670" />
        <path d="m355 109 34-18v43l-34 18Z" fill="#e4d4b9" />
        <path d="m331 98 10 5v8l-10-5Zm0 17 10 5v8l-10-5Zm34-4 12-6v8l-12 6Zm0 17 12-6v8l-12 6Z" fill="#f8efd8" />
        <path d="m393 117 25-14 25 14v31l-25 14-25-14Z" fill="#c59f78" />
        <path d="m393 117 25 14v31l-25-14Z" fill="#a8815e" />
        <path d="m418 131 25-14v31l-25 14Z" fill="#dec8a7" />
        <path d="m399 122 7 4v7l-7-4Zm0 14 7 4v7l-7-4Zm25-3 10-6v7l-10 6Z" fill="#fff1d4" />
        <path d="m93 113 13-8 13 8v17l-13 8-13-8Z" fill="#8d9f78" />
        <path d="m106 121 13-8v17l-13 8Z" fill="#708666" />
        <path d="m90 120 7-4v23l-7-2Zm35 8 7-4v23l-7-2Zm-8-39 7-4v23l-7-2Z" fill="#9b7957" />
        <path d="m91 104 5-7 5 7v8h-10Zm31 21 5-7 5 7v8h-10Zm-9-39 5-7 5 7v8h-10Z" fill="#a1b77f" />
        <path d="m300 184 62 22-21 12-62-22Zm105 10 57-25 18 10-57 26Z" fill="#d8c5a6" opacity=".8" />
        <path d="m214 217 35 13m-8-22 34 13m-8-22 34 13" stroke="#d0ebe0" strokeWidth="2" strokeLinecap="round" opacity=".8" />
        <circle cx="292" cy="61" r="3" fill="#cd8052" />
        <path d="M288 61h-22m26 0h22m-13-12v24" stroke="#cd8052" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="isometric-scene-caption">Roads · bridges · water systems</span>
    </div>
  )
}
