export const perBall = o => o.current_price / o.pack_quantity;
export const comparable = o => Number.isFinite(o.current_price) && o.current_price>=0 && o.pack_quantity>0 && o.currency==='USD' && !o.is_add_on;
export function stats(offers) {
  const v=offers.filter(comparable).map(perBall).sort((a,b)=>a-b), n=v.length;
  return n?{n,min:v[0],max:v[n-1],mean:v.reduce((a,b)=>a+b,0)/n,median:n%2?v[(n-1)/2]:(v[n/2-1]+v[n/2])/2}:{n:0,min:null,max:null,mean:null,median:null};
}
export function quantile(values,p){const v=[...values].sort((a,b)=>a-b),i=(v.length-1)*p,l=Math.floor(i);return v[l]+(v[Math.ceil(i)]-v[l])*(i-l);}
export function classify(price,offers){const s=stats(offers);if(!s.n)return 'No comparable observations';if(s.min===s.max && Math.round((price+1e-10)*100)===Math.round((s.min+1e-10)*100))return 'At the observed benchmark';if(price<s.min)return 'Below the researched group';if(price>s.max)return 'Above the researched group';if(s.min===s.max)return 'At the observed benchmark';const values=offers.filter(comparable).map(perBall);return price<quantile(values,.25)?'Budget-oriented':price>quantile(values,.75)?'Premium-oriented':'Near the group middle';}
export function relation(price,offer){const delta=price-perBall(offer);return Math.round((price+1e-10)*100)===Math.round((perBall(offer)+1e-10)*100)?'Comparable':delta>0?'Cheaper than you':'More expensive than you';}
export function filterCompetitors(data,{search='',type='All',position='All',sort='asc'}={}){return data.competitors.filter(c=>(type==='All'||c.classification===type)&&(position==='All'||c.positioning.toLowerCase().includes(position.toLowerCase()))&&`${c.name} ${c.primary_products}`.toLowerCase().includes(search.toLowerCase())).sort((a,b)=>{const price=c=>perBall(data.pricing_offers.find(o=>o.offer_id===c.representative_offer_id));return (price(a)-price(b))*(sort==='asc'?1:-1);});}
