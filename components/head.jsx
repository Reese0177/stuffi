import NextHead from 'next/head';

export default function Head() {
  return (
    <NextHead>
      <title>Stuffi</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Organize, filter, sort, and rate items" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}
