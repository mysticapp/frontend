import {Flex, Text, createStyles} from '@mantine/core'

const useStyles = createStyles((theme) =>({
    channelNav:{
        backgroundColor: theme.colors.dark[6],
        width:'100%'
    }
}))
export default function ChannelTopBar(){
    const {classes} = useStyles();
    return (
        <>
        <Flex className={classes.channelNav}>
            <Text size={'xl'}>general</Text>
        </Flex>
        </>
    )
}