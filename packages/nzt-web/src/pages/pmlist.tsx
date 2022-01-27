import { helper } from '@/lib/helper'
import { useStore } from '@/store/index'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import {
  Box,
  BoxProps,
  chakra,
  Container,
  Img,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useInterval,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React, { useMemo, useState } from 'react'
import { useSortBy, useTable } from 'react-table'
import ORACLE_ABI from '../constants/abi/myoracle.json'
import FieldInput from 'components/FieldInput'

interface IList {
  fromUnit: number
  toUnit: number
  factor: string
}

export const pmlist = observer((props: BoxProps) => {
  const [rectangle, setRectangle] = useState<IList[]>([])
  const { god, lang } = useStore()
  const addr = '0xD666a32B01fF9503f7c90aC37C35ab75cA194890'

  const columns = useMemo(
    () => [
      {
        Header: 'name',
        accessor: 'factor',
      },
      {
        Header: 'Latitude',
        accessor: 'fromUnit',
      },
      {
        Header: 'Longtitude',
        accessor: 'toUnit',
      },
    ],
    []
  )

  async function run() {
    // console.log('god', god)
    try {
      const locations: any[] = (await god.currentNetwork.execContract({
        address: addr,
        abi: ORACLE_ABI,
        method: 'getAllLocations',
        params: [],
      })) as any[]
      // console.log('locations', locations)

      var arr = locations.map(function (elem) {
        return {
          fromUnit: elem.lat,
          toUnit: elem.lon,
          factor: elem.name,
        }
      })
      // console.log('arr', arr)
      setRectangle(arr)
    } catch (e) {
      console.log(e)
    }
  }

  useInterval(() => {
    run()
  }, 2000)

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data: rectangle },
    useSortBy
  )

  return (
    <Container maxW="5xl" mt="20px">
      <Text fontSize="3xl">Account Detail</Text>
      <Box
        mt="10px"
        borderWidth="1px"
        borderRadius="lg"
        h="200px"
        alignItems="center"
        justifyContent="center"
        display="flex"
        p="20px"
      >
        <Img w={20} src={god.currentChain.logoUrl} />
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Wallet id</Th>
              <Th>Chain name</Th>
              <Th isNumeric>Credit</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Text mr={2}>{helper.string.truncate(god.currentNetwork.account, 12, '...')}</Text>
              </Td>
              <Td>{god.currentChain.name}</Td>
              <Td isNumeric>
                <chakra.span mr={1}>{god.currentChain.Coin.balance.format}</chakra.span>
                <chakra.span>{god.currentChain.Coin.symbol}</chakra.span>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Text mt="20px" fontSize="3xl">
        PM 2.5 List
      </Text>
      <Box mt="10px" mb="20px" borderWidth="1px" borderRadius="lg" overflow="hidden" minH="200px">
        {/* <Table columns={columns} data={rectangle} /> */}
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())} isNumeric={column.isNumeric}>
                    {column.render('Header')}
                    <chakra.span pl="4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Box>

      <FieldInput />
    </Container>
  )
})

export default pmlist
