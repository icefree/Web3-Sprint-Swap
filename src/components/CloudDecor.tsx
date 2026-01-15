// 祥云装饰 SVG 组件
export function CloudDecor({ position }: { position: 'left' | 'right' }) {
  return (
    <svg
      className={`cloud-decor cloud-${position}`}
      viewBox="0 0 200 100"
      fill="currentColor"
    >
      <path d="M180,50 Q160,20 130,30 Q120,10 90,20 Q70,5 50,25 Q20,20 20,50 Q5,60 20,80 Q40,95 70,85 Q100,100 140,85 Q170,95 180,70 Q195,60 180,50Z" />
    </svg>
  )
}
