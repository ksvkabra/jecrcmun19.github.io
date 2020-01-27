import React from 'react'
import Typography from '@material-ui/core/Typography'
import ContentBox from './content-box'
import Link from '@material-ui/core/Link'

export default function FormCompleted() {
  return (
    <ContentBox className='mb-16'>
      <div>
        <Typography variant='h4' className='my-8' component='h1' paragraph>
          Thank You for Registration
        </Typography>
        <Typography variant='body1' component='p' paragraph>
          Our team will contact you for further information regarding event.
        </Typography>
        <Typography variant='body2' component='p'>
          For more queries, you can contact:
        </Typography>
        <div className='mt-4'>
          <Typography variant='subtitle2' component='p' paragraph>
            Pourush Choudhary: <Link href='tel:9413900468'>9413900468</Link>
          </Typography>
          <Typography variant='subtitle2' component='p' paragraph>
            Shrey Bhargava: <Link href='tel:8955332841'>8955332841</Link>
          </Typography>
        </div>
      </div>
    </ContentBox>
  )
}
