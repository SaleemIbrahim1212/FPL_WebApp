'use client'
import React from 'react';
import Image from 'next/image'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const LeagueTable = ({ images }: any) => {

  return (
    <div className='text-black mr-5 mt-5 border flex'>

      <Table isStriped aria-label="Example static collection table">
        <TableHeader>
        <TableColumn>Club</TableColumn>
        <TableColumn>Position</TableColumn>
          <TableColumn>Points </TableColumn>
        </TableHeader>
        <TableBody items={images} emptyContent={"No rows to display."}>

          {images.map((file: any, index: number) => (
            <TableRow key={index}>
              <TableCell>
                 <Image width={35} height={35} src={`/Prem-Logos/${file}`} alt={file + ' logo'} />
              </TableCell>
              <TableCell>
                 <Image width={35} height={35} src={`/Prem-Logos/${file}`} alt={file + ' logo'} />
              </TableCell>
              <TableCell>
                 <Image width={35} height={35} src={`/Prem-Logos/${file}`} alt={file + ' logo'} />
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </div>
  );
};

export default LeagueTable;
