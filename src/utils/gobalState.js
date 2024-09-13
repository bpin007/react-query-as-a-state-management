import { useQuery, useQueryClient } from "@tanstack/react-query";

export const createGlobalState = (queryKey, initialData) => {
  return function () {
    const queryClient = useQueryClient();

    // Fetch the data using useQuery
    const { data } = useQuery({
      queryKey: [queryKey],
      queryFn: () => Promise.resolve(initialData),
      refetchInterval: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    });

    // Function to update data with access to previous data (prevData)
    function setData(updateFn) {
      // Use a function to access the previous data
      queryClient.setQueryData([queryKey], (prevData) => {
        return updateFn instanceof Function ? updateFn(prevData) : updateFn;
      });
    }
    //below function is for resetting
    function resetData() {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      queryClient.refetchQueries({
        queryKey: [queryKey],
      });
    }

    return [data, setData, resetData];
  };
};
