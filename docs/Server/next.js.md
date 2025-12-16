### Training
https://nextjs.org/learn/dashboard-app
### Installation
```bash
npm install -g pnpm
npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm
cd nextjs-dashboard
```
#### Default Placeholder Data in app/lib/placeholder-data.ts
/app/lib/placeholder-data.ts

#### Defined Types that will be returned from the database
/app/lib/definitions.ts

#### Running Dev Server
```bash
pnpm i
pnpm dev
```
#### Add global CSS in /app/layout.tsx
```js
import '@/app/ui/global.css';
```
#### Add the following Line to /app/pages.tsx (Damit wird ein schwarzes Dreieck erstellt)
```js
className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
```
#### Add the following content in /app/ui/home.module.css
```css
.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
```
#### Import home.modules.css in /app/page.tsx (erstellt ein schwarzes Dreieck oberhalb der NavBar)
```js
import styles from '@/app/ui/home.module.css';
...
<div className={styles.shape} />
```
/app/ui/fonts.ts
```js
import { Inter } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });
```
#### Add and Modify in /app/layout.tsx
```js
import { inter } from '@/app/ui/fonts';
<body className={`${inter.className} antialiased`}>{children}</body>
```
#### Add images to /app/page.tsx
```js
import Image from 'next/image';
...
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
```	  
	  
#### Externe Bilder müssen in next.config.ts erlaubt werden z.B. in /app/page.tsx
```js 
          <Image
            src="https://placehold.co/600x400"
            alt="Picture of the author"
            width={500}
            height={500}
          />
		  
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/600x400',
        search: '',
      },
    ],
    dangerouslyAllowSVG: true, // Vectorgrafiken sind default deaktiviert.
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
```
#### The next/font module automatically optimizes your fonts and removes external network requests for improved privacy and performance.
app/layout.tsx
```js
import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})
...
<html lang="en" className={geist.className}>
```