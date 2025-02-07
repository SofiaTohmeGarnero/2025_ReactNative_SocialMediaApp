export const pagination = <T>(database: T[], currentPage:number, pageSize:number) =>{
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if(startIndex >= database.length){
      return [];
    } else {
      return database.slice(startIndex, endIndex);
    }
  }