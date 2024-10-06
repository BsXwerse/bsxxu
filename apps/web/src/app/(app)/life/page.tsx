import DownToTopView from '@/components/motion/down-to-top-view';

export default function Life() {
  return (
    <div className="max-w-3xl mx-auto">
      <DownToTopView className="mt-24 mb-3 text-3xl font-bold">
        日常
      </DownToTopView>
      <DownToTopView className="text-xs text-muted-foreground">
        这里是一些我的生活点滴
      </DownToTopView>
    </div>
  );
}
