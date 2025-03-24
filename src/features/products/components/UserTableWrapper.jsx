'use client';
import UserTable from '@/components/Common/Table';
import { PlusIcon, VerticalDotsIcon } from '@/components/icons';
import { statusColorMap } from '@/utils/colorStatus/page';
import { capitalize } from '@/utils/functions/page';
import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '@heroui/react';
import Link from 'next/link';
import { useCallback, useState } from 'react';

export default function UserTableWrapper({
  initialData,
  columns,
  pageSize,
  searchableFieldsName,
}) {
  const [filteredData, setFilteredData] = useState(initialData);

  const filterData = useCallback(
    (value) => {
      try {
        if (!value) {
          setFilteredData(initialData);
          return;
        }

        const filtered = initialData.filter((user) => {
          const availableFields = searchableFieldsName.filter(
            (field) =>
              user.hasOwnProperty(field) &&
              user[field] !== undefined &&
              user[field] !== null,
          );
          return availableFields.some((field) =>
            user[field].toString().toLowerCase().includes(value.toLowerCase()),
          );
        });
        setFilteredData(filtered);
      } catch (error) {
        console.error('Error filtering data:', error);
        setFilteredData(initialData);
      }
    },
    [initialData, searchableFieldsName],
  );

  const renderCell = useCallback((user, columnKey) => {
    try {
      const cellValue = user[columnKey];

      switch (columnKey) {
        case 'name':
          return (
            <User
              avatarProps={{ radius: 'lg', src: user.avatar }}
              description={user.email}
              name={cellValue}
            >
              {user.email}
            </User>
          );
        case 'status':
          return (
            <Chip
              className='capitalize'
              color={statusColorMap[user.status]}
              size='sm'
              variant='flat'
            >
              {capitalize(user.status)}
            </Chip>
          );
        case 'role':
          return <span>{capitalize(user.role)}</span>;
        case 'team':
          return <span>{capitalize(user.team)}</span>;
        case 'email':
          return <a href={`mailto:${user.email}`}>{user.email}</a>;
        case 'age':
          return <span>{user.age} years</span>;
        case 'id':
          return <span>{user._id}</span>;
        case 'actions':
          return (
            <div className='relative flex justify-center items-center gap-2'>
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size='sm' variant='light'>
                    <VerticalDotsIcon className='text-default-300' />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key='edit' onPress={() => {}}>
                    Edit
                  </DropdownItem>
                  <DropdownItem key='delete' onPress={() => {}}>
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
      }
    } catch (error) {
      console.error(`Error rendering cell ${columnKey}:`, error);
      return <span>Error</span>;
    }
  }, []);

  return (
    <>
      <div className='flex justify-between items-center'>
        <h1>All Products</h1>
        <Link href='/admin/add-products'>
          <Button
            className='bg-foreground text-background'
            endContent={<PlusIcon />}
            size='sm'
          >
            Add New
          </Button>
        </Link>
      </div>
      <UserTable
        data={filteredData}
        columns={columns}
        pageSize={pageSize}
        renderCell={renderCell}
        searchableFieldsName={searchableFieldsName}
        onSearchChange={filterData}
      />
    </>
  );
}
