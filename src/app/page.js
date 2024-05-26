import FlowBuilder from '@/components/FlowBuilder';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Chat-Flow-BiteSpeed</title>
      </Head>

      <FlowBuilder />
    </main>
  );
}
