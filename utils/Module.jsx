

export function Preview({ children }) {
    return (
        <>
            <div className='text-sky-700 text-bold'>Preview</div>
            <div className='p-2 w-full border rounded-md text-black'>{children}</div>
        </>
    );
}

function importAll(r) {
    let icons = {};
    r.keys().forEach((item, index) => {
      const iconName = item
        .replace('./', '') // "./" 제거
        .replace('.svg', '') // ".svg" 제거
        .replace('-16', '') // "-16" 제거
        .replace('-12', '') // "-12" 제거
        .replace(/-/g, '_'); // "-"를 "_"로 변경
      icons[iconName] = r(item).default;
    });
    return icons;
  }
  
  const icons = importAll(require.context('../public/icon', false, /\.svg$/));
  
  export const Icon = icons;
  

  // "postbuild": "next-sitemap && rm -rf .next/cache",

