import { Heart, Zap } from 'lucide-react'
import { useEffect } from 'react';

import {
  Card as ShadCdnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface CardProps {
  data: {
    name: string;
    background: string;
    lifePoints: number;
    magicPoints: number;
  }
}

export default function Card({data}: CardProps) {

  useEffect(() => {
    console.log(data)
  }, []);

  return (
    <ShadCdnCard>
      <CardHeader>
        <CardTitle>{data?.name}</CardTitle>
      </CardHeader>
      <CardContent className='flex justify-between items-center max-sm:flex-col max-sm:justify-start max-sm:gap-4 pb-0'>
        <CardDescription>
            <span className="font-semibold">{data?.background}</span> 
        </CardDescription>
        <CardFooter className='flex-col'>
          <div className='flex'>
            {Array.from((Array(data?.lifePoints)), (_, i) => (
              <Heart key={i} size={24} className='text-red-500'/>
            ))}
          </div>
          <div className='flex'>            
            {Array.from((Array(data?.magicPoints)), (_, i) => (
              <Zap key={i} size={24} className='text-blue-600'/>
            ))}
          </div>
        </CardFooter>
      </CardContent>
    </ShadCdnCard>
  )
}
