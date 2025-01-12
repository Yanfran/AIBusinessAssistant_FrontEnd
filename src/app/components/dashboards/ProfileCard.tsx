import React from 'react';
import CardBox from '../shared/CardBox';
import { IconMapPin } from '@tabler/icons-react';
import Image, { StaticImageData } from 'next/image';

interface ProfileCardProps {
  title: string;
  subtitle: string;
  avatar: StaticImageData;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, subtitle, avatar }) => {
  return (
    <CardBox className='p-6'>
      <div className="flex items-center">
        {/* <Image src={avatar} alt={title} className="h-10 w-10 rounded-full" /> */}
        <div className="ms-1">
          <h5 className="text-base">{title}</h5>
          <p className="text-xs text-bodytext flex gap-1 items-center">
            {/* <IconMapPin size={15} /> {subtitle} */}
          </p>
        </div>
      </div>
    </CardBox>
  );
};

export default ProfileCard;