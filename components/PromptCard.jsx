import React, { useState } from 'react'
import Image from 'next/image'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

const PromptCard = ({post, handleTagClick, handleDelete, handleEdit}) => {

    const { data: session } = useSession()

    const pathName = usePathname()

    const [copied, setCopied] = useState("")

    const handleCopy = () => {
        setCopied(post.prompt)
        navigator.clipboard.writeText(post.prompt);

        setTimeout(() => setCopied(""), 2000);
    }

  return (
    <div className='prompt'>
        <div className='prompt_header'>
            <div className='flex gap-4'>

            <Link href={`/profile/${post.creator._id}/${post.creator.username}`}>
              <Image
              className='rounded-full'
              src={post.creator.image}
              width={44}
              height={44}
              alt={post.tag}
              />
            </Link>

            <div>
                <h3 className='text-base font-semibold'>{post.creator.username}</h3>
                <p className='text-sm font-normal'>{post.creator.email}</p>
            </div>
            </div>

            <Image
            onClick={handleCopy} 
            src={copied == post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            width={25}
            height={25}
            />
        </div>

        <div className="prompt_body">
            <p>{post.prompt}</p>
        </div>

        <div className="prompt_footer">
            <p
            onClick={() => handleTagClick && handleTagClick(post.tag)}
            >
                #{post.tag}
            </p>
            {post.creator._id ==  session?.user.id && pathName === '/profile' && (
                <div className='flex gap-4'>
                    <Image
                    onClick={handleEdit}
                    src={'/assets/icons/edit-icon.svg'}
                    width={18}
                    height={18}
                    />
                    <Image 
                    onClick={handleDelete}
                    src={'/assets/icons/delete-icon.svg'}
                    width={18}
                    height={18}
                    />
                </div>
            )}
        </div>
    </div>
  )
}

export default PromptCard
