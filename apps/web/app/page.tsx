'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from '@ui/components/ui/charts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@ui/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/components/ui/tabs'
import { HomeIcon, SearchIcon, CodeIcon, MapIcon, UsersIcon, LogOutIcon, TrendingUpIcon, BarChartIcon } from '@ui/components/ui/icons'
import { Badge } from '@ui/components/ui/badge';

const searchData = [
  { time: '00', googleSearch: 0, technologySearch: 0 },
  { time: '02', googleSearch: 0, technologySearch: 0 },
  { time: '04', googleSearch: 1, technologySearch: 2 },
  { time: '06', googleSearch: 0, technologySearch: 0 },
  { time: '08', googleSearch: 0, technologySearch: 0 },
  { time: '10', googleSearch: 0, technologySearch: 0 },
  { time: '12', googleSearch: 0, technologySearch: 0 },
  { time: '14', googleSearch: 0, technologySearch: 0 },
  { time: '16', googleSearch: 0, technologySearch: 0 },
  { time: '18', googleSearch: 0, technologySearch: 0 },
  { time: '20', googleSearch: 0, technologySearch: 0 },
  { time: '22', googleSearch: 0, technologySearch: 0 },
  { time: '24', googleSearch: 0, technologySearch: 0 },
]

const googleSearches = [
  { keywords: 'Auto Dealer', place: 'Nashville, TN, USA', leads: 98 },
  { keywords: 'Body Shops', place: 'Waterloo, IA, USA', leads: 89 },
  { keywords: 'Body Shops', place: 'Cheyenne, WY, USA', leads: 80 },
  { keywords: 'Roofer', place: 'Gainesville, FL, USA', leads: 90 },
  { keywords: 'Auto Body', place: 'Cheyenne, WY, USA', leads: 61 },
]

const technologySearches = [
  { technology: 'Zoho CRM', leads: 98 },
  { technology: 'Ruby on Rails', leads: 89 },
  { technology: 'Atlassian Cloud', leads: 80 },
  { technology: 'MailSpike', leads: 90 },
  { technology: 'Magento 2', leads: 61 },
]

export default function Page(): JSX.Element {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-4">
        <h1 className="text-xl font-bold mb-8">PushButtonBusinessList</h1>
        <nav className="space-y-1">
          <h2 className="text-xs font-semibold text-gray-500 mb-2">DASHBOARD</h2>
          <a href="#" className="flex items-center py-2 px-4 bg-gray-200 rounded">
            <HomeIcon className="w-4 h-4 mr-3" />
            Home
          </a>
          <h2 className="text-xs font-semibold text-gray-500 mt-4 mb-2">SEARCH LEADS</h2>
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
            <SearchIcon className="w-4 h-4 mr-3" />
            Google
          </a>
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
            <CodeIcon className="w-4 h-4 mr-3" />
            By Technology
          </a>
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
            <CodeIcon className="w-4 h-4 mr-3" />
            By SIC-Code
          </a>
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
            <MapIcon className="w-4 h-4 mr-3" />
            By State
          </a>
        </nav>
        <nav className="absolute bottom-4 space-y-1">
          <h2 className="text-xs font-semibold text-gray-500 mb-2">ADMIN</h2>
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
            <UsersIcon className="w-4 h-4 mr-3" />
            User Management
          </a>
          <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
            <LogOutIcon className="w-4 h-4 mr-3" />
            Logout
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={searchData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="googleSearch" stroke="#ef4444" name="Google Search" />
                <Line type="monotone" dataKey="technologySearch" stroke="#22c55e" name="Search By Technology" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leads</CardTitle>
              <BarChartIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="day" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
                <TabsContent value="day">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Google Search</span>
                      <span className="text-sm font-medium">0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Search By Technology</span>
                      <span className="text-sm font-medium">0</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="week">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Google Search</span>
                      <span className="text-sm font-medium">14</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Search By Technology</span>
                      <span className="text-sm font-medium">23</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="month">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Google Search</span>
                      <span className="text-sm font-medium">64</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Search By Technology</span>
                      <span className="text-sm font-medium">89</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Search</CardTitle>
              <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,101</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Latest Google Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {googleSearches.map((search, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block h-8 w-8 rounded-full bg-gray-200 text-center leading-8">
                        {search.keywords.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{search.keywords}</p>
                      <p className="text-sm text-gray-500 truncate">{search.place}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge variant="secondary">{search.leads} leads</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Latest Searches by Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {technologySearches.map((search, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block h-8 w-8 rounded-full bg-gray-200 text-center leading-8">
                        {search.technology.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{search.technology}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge variant="secondary">{search.leads} leads</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}