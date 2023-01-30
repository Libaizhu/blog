import React,{FC} from 'react'

import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';


const darkSvg = ()=>(
    <svg viewBox="0 0 1026 1024" width="24" height="24">
        <path d="M716.8 2.048q67.584 27.648 124.416 74.24t97.28 106.496 63.488 131.072 23.04 148.992q0 68.608-17.92 132.096t-50.176 118.784-77.824 100.864-100.864 77.824-119.296 50.176-132.608 17.92q-77.824 0-148.992-22.528t-131.072-63.488-106.496-97.792-74.24-124.416q64.512 73.728 153.6 115.712t194.56 41.984q95.232 0 179.2-36.352t146.432-98.816 98.816-146.432 36.352-179.2q0-104.448-42.496-194.048t-115.2-153.088zM220.16 289.792l-89.088-86.016 122.88-18.432 54.272-110.592 55.296 110.592 122.88 18.432-89.088 86.016 21.504 122.88-110.592-58.368-109.568 58.368z" p-id="1703" fill="#333333"></path>
    </svg>
)
const DarkIcon:FC = (props: Partial<CustomIconComponentProps>) => (
    <div style={{width:'28px',height:'28px',marginTop:'3px'}}>
        <Icon component={darkSvg} {...props} />
    </div>
);

export default DarkIcon;
