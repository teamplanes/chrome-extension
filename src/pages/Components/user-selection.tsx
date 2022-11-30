import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { getItem, setItem } from "../Utils/storage";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'mint', label: 'Mint' },
    { value: 'peach', label: 'Peach' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'caramel', label: 'Caramel' },
    { value: 'coffee', label: 'Coffee' },
    { value: 'raspberry', label: 'Raspberry' },
    { value: 'lemon', label: 'Lemon' },
    { value: 'lime', label: 'Lime' },
    { value: 'orange', label: 'Orange' },
    { value: 'watermelon', label: 'Watermelon' },
    { value: 'grape', label: 'Grape' },
];

type Option = {
    value: string;
    label: string;
}

export const UserSelection = ({ width, email, userId, isLoading, selections }: { width: number; email?: string; userId: string; selections?: Option[]; isLoading?: boolean; }) => {
    const [selected, setSelected] = useState<Option[]>((selections || []) as Option[]);
    const [loading, setLoading] = useState(true);

    const text = `Hello${email ? `, ${email.split('@')[0]}` : ' Sexy'}!`;

    useEffect(() => {
        const setItems = async () => {
            if (selected.length > 0) {
                await setItem('user-selection', JSON.stringify({ [userId]: selected.map((e) => e.value) }));
            }
        }
        setItems();
    }, [selected, userId]);

    useEffect(() => {
        if (!userId) return;
        const getItems = async () => {
            const results = await getItem('user-selection');
            if (results) {
                const parsed = JSON.parse(results as unknown as string);
                Object.keys(parsed)?.includes(userId) ? setSelected(parsed[userId].map((e: string) => ({ value: e, label: e }))) : setSelected([]);

            }
            setLoading(false)
        }
        getItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    if (loading || isLoading) {
        return (
            <Flex w={width} h={width} bg="white" justify="center" align="center">
                <Text>Loading...</Text>
            </Flex>
        )
    }

    return (
        <Flex flex={1} direction="column">
            <Flex justify="center" pt={20} w="100%">
                <Text m={0}>{text}</Text>
            </Flex>
            <Select
                styles={{
                    control: (baseStyles, state) => {
                        return {
                            ...baseStyles,
                            width: `${width}px`,
                            // can customise styles to be like theme!
                            //borderColor: state.isFocused ? 'grey' : 'red',
                        }
                    },
                }}
                isMulti
                name="colors"
                options={options}
                value={selected}
                onChange={(val) => {
                    setSelected([...val] as Option[])
                }}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </Flex>
    );
};

