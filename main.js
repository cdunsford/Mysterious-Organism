// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  const pAequorFactory =  (orgNumber, dnaBases) => {
    
    return {
        specimenNum: orgNumber,
        dna: dnaBases,
        mutate: function () {

            let randBase = '';
            let randDNA = '';
            let randNum = 0;

            do {

                randBase = returnRandBase();
                randNum = Math.floor(Math.random() * 15);
                randDNA = this.dna[randNum];


            } while (randBase === randDNA);
            
            this.dna[randNum] = randBase;
        },
        compareDNA: function (pAeqor) {

            let count = 0;
            for (let index = 0; index < this.dna.length; index++) {
                if(this.dna[index] === pAeqor.dna[index]) {
                    count++;
                }
                
            }
            let percentDNAinCommon = ((count/15) * 100).toFixed(0);
            
            console.log(`specimen #${this.specimenNum} and specimen #${pAeqor.specimenNum} have ${percentDNAinCommon}% DNA in common`);
        },
        willLikelySurvive: function () {
            
            let count = 0;
            for (let index = 0; index < this.dna.length; index++) {
                if(this.dna[index] === 'C' || this.dna[index] === 'G') {
                    count++;
                }
                
            }
            let percentToLikelySurvive = ((count/15) * 100).toFixed(0);

            return percentToLikelySurvive >= 60 ? true : false;
        }

    };

  };

 

  const orgsLikelyToSurvive = [];
  let organismID = 1;

  //Changed from a for loop
  while (orgsLikelyToSurvive.length < 30) {
    let newOrg = pAequorFactory(organismID, mockUpStrand());
    if(newOrg.willLikelySurvive())
    {
        orgsLikelyToSurvive.push(newOrg);
        console.log(orgsLikelyToSurvive[orgsLikelyToSurvive.length -1].specimenNum + ':' + orgsLikelyToSurvive[orgsLikelyToSurvive.length -1].dna); 
        organismID++;

    }
  }


 
/* 
 myOrganism.compareDNA(myOrganism2);

if(myOrganism.willLikelySurvive())
{
     console.log(`specimen #${myOrganism.specimenNum} is likely to survive`);

}
else {
    console.log(`specimen #${myOrganism.specimenNum} is NOT likely to survive`);

}

if(myOrganism2.willLikelySurvive())
{
     console.log(`specimen #${myOrganism2.specimenNum} is likely to survive`);

}
else {
    console.log(`specimen #${myOrganism2.specimenNum} is NOT likely to survive`);

}

myOrganism.mutate();
console.log(myOrganism.specimenNum + ':' + myOrganism.dna); 
console.log(myOrganism2.specimenNum  + ':' + myOrganism2.dna); 
myOrganism.compareDNA(myOrganism2);*/

