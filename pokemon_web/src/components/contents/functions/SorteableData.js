import { useState, useMemo } from 'react';

const SortableData = (items, config = null) => {

    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
        let sorteableItems = [ ...items];
        if(sortConfig !== null) {
            sorteableItems.sort((a,b) => {
                if(a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
                if(a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;

                return 0;
            });
        }

        return sorteableItems;
    } , [items, sortConfig]);

    const reqSort = (key) => {
        let direction = 'asc';

        if(sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc'

        setSortConfig({ key, direction });
    };

    return { items: sortedItems, reqSort, sortConfig };
}

export default SortableData;
