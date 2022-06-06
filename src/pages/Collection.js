import GridCol from "../components/Collection/GridCol";
import Typography from "../components/shared/Typography";

const Collection = () => {
  return (
      <div className="h-full flex flex-col items-center p-2 md:p-8">
        {/* header */}
        <Typography variant="subheader" fontSize={['lg','xl']} styles='px-6 text-center'>
          What you need to know
        </Typography>
        <div className="flex flex-col md:flex-row items-center md:items-start mt-10 md:mt-20
         divide-y-[1px] md:divide-y-0 md:divide-x-[1px] divide-[#3142EA33]/10 xl:w-3/4" 
        >
            {/* col 1 */}
            <GridCol 
              btnTitle="NOTHING TO SEE HERE YET"
              header={'Collection Supply'}
              subheader={'13,333 NFTs.'}
              body="Big community. Tight family."
              src="/images/collectionSupply.png" 
              disabled={true}
            />
            {/* col 2 */}
            <GridCol 
              btnTitle="BUY DEADGODS" 
              header={'DeadGod Holders'}
              subheader={'1 mint each.'}
              body={'Every DeadGod will be guaranteed the ability to mint 1 Duppie via WL.'}  
              src='/images/deadgodTombstone.png'
              href={"https://magiceden.io/marketplace/degods"}
            />
            {/* col 3 */}
            <GridCol 
              btnTitle="BUY $DUST"
              header={'Mint with $DUST ONLY'}
              subheader={'375 $DUST'}
              body={'Mix of WL & public mint. Will have some opportunities to earn WL & $DUST for bounties.'} 
              src="/images/coin_shadow.svg"  
              href={"https://jup.ag/swap/SOL-DUST"}
            />
        </div>
    </div>
  );
};


export default Collection;
