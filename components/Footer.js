import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { faEnvelope, faSquareRss } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        {process.env.NODE_ENV === 'production' && (
          <div className="mb-3 flex">
            <Link href="https://hits.sh/blog.silentsoft.org/">
              <img
                alt="Hits"
                src="https://hits.sh/blog.silentsoft.org.svg?view=today-total&style=flat-square&label=visitors&color=171717&labelColor=171717"
              />
            </Link>
          </div>
        )}
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            title="Email"
            icon={faEnvelope}
            href={`mailto:${siteMetadata.email}`}
            size="6"
          />
          <SocialIcon title="GitHub" icon={faGithub} href={siteMetadata.github} size="6" />
          <SocialIcon title="Twitter" icon={faTwitter} href={siteMetadata.twitter} size="6" />
          <SocialIcon
            title="RSS"
            icon={faSquareRss}
            href={`${siteMetadata.siteUrl}/feed.xml`}
            size="6"
          />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
