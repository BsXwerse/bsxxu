import Link from 'next/link';
import {
  RiGithubFill,
  RiMailSendLine,
  RiTelegramFill,
  RiTwitterXLine,
} from 'react-icons/ri';
import { SiPixiv } from 'react-icons/si';

export default function Footer() {
  return (
    <div className="w-full min-h-32 text-sm flex flex-col items-center justify-center gap-3 bg-accent border-t-[1.5px] border-muted-foreground/40 ">
      <div className="flex justify-center gap-3">
        <span>© 2024 Bsx</span>
        <Link href="/about" className="underline hover:text-muted-foreground">
          About me
        </Link>
        <span>Still exploring...</span>
      </div>
      <div className="flex justify-center gap-2">
        <span className="flex items-center gap-1 underline hover:text-muted-foreground">
          <RiGithubFill />
          <Link href="https://github.com/BsXwerse" target="_blank">
            GitHub
          </Link>
        </span>
        ·
        <span className="flex items-center gap-1 underline hover:text-muted-foreground">
          <RiTwitterXLine />
          <Link href="https://twitter.com/bsx_jzb0" target="_blank">
            Twitter
          </Link>
        </span>
        ·
        <span className="flex items-center gap-1 underline hover:text-muted-foreground">
          <SiPixiv />
          <Link href="https://www.pixiv.net/users/25789224" target="_blank">
            Pixiv
          </Link>
        </span>
        ·
        <span className="flex items-center gap-1 underline hover:text-muted-foreground">
          <RiMailSendLine />
          <Link href="mailto:Bsx<bsx_homu@163.com>" target="_blank">
            Mail
          </Link>
        </span>
        ·
        <span className="flex items-center gap-1 underline hover:text-muted-foreground">
          <RiTelegramFill />
          <Link href="https://t.me/bsx_jzb" target="_blank">
            Telegram
          </Link>
        </span>
      </div>
      <div>Powered by nextjs.</div>
    </div>
  );
}
